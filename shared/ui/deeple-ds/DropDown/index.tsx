import { useState, useEffect, useRef, cloneElement } from "react";
import { css } from "@emotion/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { MenuProps, DropDownProps, MenuLocation } from "./type";
import { menuCssObj, dropDownCssObj } from "./style";

export const Menu = ({ width = 180, options = [], optionContainer, header, footer }: MenuProps) => {
  const optionArr = options.map((option, index) => (
    <button
      type="button"
      key={option.key ? option.key : index}
      css={css`
        ${menuCssObj.option(!!option.focused, !!option.onClick, option.flexibleHeight)}${option.additionalButtonCss}
      `}
      onClick={option.onClick}
    >
      {option.content}
    </button>
  ));

  return (
    <div css={menuCssObj.menuContainer(width)}>
      {header && <div css={menuCssObj.header(!!header.onClick)}>{header.content}</div>}
      {optionContainer ? <div css={optionContainer.css}>{optionArr}</div> : optionArr}
      {footer && (
        <button type="button" css={menuCssObj.footer(!!footer.onClick)} onClick={footer.onClick}>
          {footer.content}
        </button>
      )}
    </div>
  );
};

export const DropDown = ({
  title,
  icon = { location: "suffix", whenMenuVisible: <FiChevronUp />, whenMenuInvisible: <FiChevronDown /> },
  customTitle,
  menu,
  isRightDirection,
  menuConfig,
}: DropDownProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuLocation, setMenuLocation] = useState<MenuLocation>(() => {
    const defaultLocation: MenuLocation = { direction: "top-right", topOrBottom: 2.625, leftOrRight: 0 };
    if (menuConfig && menuConfig.direction) {
      defaultLocation.direction = menuConfig.direction;
    }

    return defaultLocation;
  });
  const dropDownWrapperRef = useRef<HTMLDivElement | null>(null);
  const customTitleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (customTitleRef.current) {
      const height = customTitleRef.current.offsetHeight;
      setMenuLocation((prev) => ({ ...prev, topOrBottom: height / 16 + 0.5 }));
    }
  }, []);

  useEffect(() => {
    if (!menuVisible) {
      return;
    }
    const close = (event: MouseEvent) => {
      if (
        dropDownWrapperRef.current &&
        event.target instanceof Node &&
        !dropDownWrapperRef.current.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("click", close);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("click", close);
    };
  }, [menuVisible]);

  return (
    <div css={dropDownCssObj.dropDownWrapper} ref={dropDownWrapperRef}>
      <button type="button" css={dropDownCssObj.titleWrapper} onClick={() => setMenuVisible(!menuVisible)}>
        {customTitle === undefined && (
          <>
            {icon.location === "prefix" && (menuVisible ? <FiChevronUp /> : <FiChevronDown />)}
            <span>{title}</span>
            {icon.location === "suffix" && (menuVisible ? <FiChevronUp /> : <FiChevronDown />)}
          </>
        )}
        {customTitle &&
          cloneElement(<div>{customTitle}</div>, {
            ref: (element: HTMLElement) => {
              customTitleRef.current = element;
            },
          })}
      </button>
      {!!menu && menuVisible && (
        <div css={dropDownCssObj.menuWrapper(menuLocation, isRightDirection)}>
          <Menu
            {...menu}
            options={
              // TODO: 메뉴아이템 별로 Close의 상황이 나올 수 있는지 논의하기
              menu.options?.map((option) => ({
                flexibleHeight: menuConfig?.flexibleHeight,
                ...option,
                onClick: () => {
                  if (menuConfig?.closeAfterClickEvent) {
                    setMenuVisible(false);
                  }

                  if (option.onClick) {
                    option.onClick();
                  }
                },
              }))
            }
          />
        </div>
      )}
    </div>
  );
};
