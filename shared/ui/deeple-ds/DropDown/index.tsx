import { useState, useEffect, useRef, cloneElement } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { MenuProps, DropDownProps, MenuLocation } from "./type";
import { menuCssObj, dropDownCssObj } from "./style";

export const Menu = ({ width = 180, options = [], header, footer }: MenuProps) => (
  <div css={menuCssObj.menuContainer(width)}>
    {header && <div css={menuCssObj.header(!!header.onClick)}>{header.content}</div>}
    {options.map((option, index) => (
      <button
        type="button"
        key={option.key ? option.key : index}
        css={menuCssObj.option(!!option.focused, !!option.onClick)}
        onClick={option.onClick}
      >
        {option.content}
      </button>
    ))}
    {footer && (
      <button type="button" css={menuCssObj.footer(!!footer.onClick)} onClick={footer.onClick}>
        {footer.content}
      </button>
    )}
  </div>
);

export const DropDown = ({
  title,
  icon = { location: "suffix", whenMenuVisible: <FiChevronUp />, whenMenuInvisible: <FiChevronDown /> },
  customTitle,
  menu,
}: DropDownProps) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuLocation, setMenuLocation] = useState<MenuLocation>(() => {
    const defaultLocation: MenuLocation = { direction: "top-right", topOrBottom: 2.625, leftOrRight: 0 };
    if (menu && menu.direction) {
      defaultLocation.direction = menu.direction;
    }

    return defaultLocation;
  });

  const customTitleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (customTitleRef.current) {
      const height = customTitleRef.current.offsetHeight;
      setMenuLocation((prev) => ({ ...prev, topOrBottom: height / 16 + 0.5 }));
    }
  }, []);

  return (
    <div css={dropDownCssObj.dropDownWrapper}>
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
        <div css={dropDownCssObj.menuWrapper(menuLocation)}>
          <Menu
            {...menu}
            options={
              menu.closeAfterClickEvent
                ? menu.options?.map((option) => ({
                    ...option,
                    onClick: () => {
                      if (option.onClick) {
                        option.onClick();
                        setMenuVisible(false);
                      }
                    },
                  }))
                : menu.options
            }
          />
        </div>
      )}
    </div>
  );
};
