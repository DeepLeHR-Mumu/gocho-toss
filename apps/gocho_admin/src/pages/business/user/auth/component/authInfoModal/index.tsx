import { useState } from "react";
import Image from "next/image";

import { ModalComponent } from "@/component";
import { useManagerRequest } from "@/api";

import { AuthInfoModalProps } from "./type";
import { cssObj } from "./style";

export const AuthInfoModal = ({ managerId, accept, reject, close }: AuthInfoModalProps) => {
  const { data: managerRequestInfo } = useManagerRequest({ managerId });
  const [rejectReason, setRejectReason] = useState<string>("");

  if (!managerRequestInfo) {
    return (
      <ModalComponent>
        <h3 css={cssObj.title}>데이터를 불러오는 중입니다.</h3>
        <button type="button">닫기</button>
      </ModalComponent>
    );
  }

  const { company, isFirst } = managerRequestInfo;

  return (
    <ModalComponent>
      <div css={cssObj.modalContainer}>
        <h3 css={cssObj.title}>기업 인증 신청 정보</h3>
        <table css={cssObj.customTable}>
          <tbody>
            <tr>
              <td>
                <span>기업 명</span>
              </td>
              <td>
                <span>{company.name}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>인증 상태</span>
              </td>
              <td>
                <span>{company.status.name}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>사업자 증명원</span>
              </td>
              <td>
                <a css={cssObj.download} href={managerRequestInfo.certificationUrl} target="_blank" rel="noreferrer">
                  확인하기
                </a>
              </td>
            </tr>
            {isFirst && (
              <>
                <tr>
                  <td>
                    <span>기업 로고</span>
                  </td>
                  <td>
                    <Image src={company.logoUrl ? company.logoUrl : ""} alt="logo" width={50} height={50} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>배경 이미지</span>
                  </td>
                  <td>
                    <Image
                      src={company.backgroundImageUrl ? company.backgroundImageUrl : ""}
                      alt="logo"
                      width={50}
                      height={50}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>사업자 번호</span>
                  </td>
                  <td>
                    <span>{company.businessNumber}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>업종</span>
                  </td>
                  <td>
                    <span>{company.industry}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>규모</span>
                  </td>
                  <td>
                    <span>{company.size}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>사원 수</span>
                  </td>
                  <td>
                    <span>{company.employeeNumber}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>설립일</span>
                  </td>
                  <td>
                    <span>{company.foundDate}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>위치</span>
                  </td>
                  <td>
                    <span>{company.location.address}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>한 줄 소개</span>
                  </td>
                  <td>
                    <span>{company.intro}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>평균 연봉</span>
                  </td>
                  <td>
                    <span>{company.payAvg}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>신입 연봉</span>
                  </td>
                  <td>
                    <span>{company.payStart}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>연봉 상세 정보</span>
                  </td>
                  <td>
                    <span>{company.payDesc}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>복지</span>
                  </td>
                  <table css={cssObj.customTable}>
                    <tbody>
                      <tr>
                        <td>
                          <h3>급여</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.money?.map((money, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {money}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>명절/경조사</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.holiday?.map((holiday, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {holiday}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>의료</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.health?.map((health, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {health}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>생활</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.life?.map((life, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {life}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>휴가</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.vacation?.map((vacation, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {vacation}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>시설</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.facility?.map((facility, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {facility}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>자기계발</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.growth?.map((growth, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {growth}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>기타</h3>
                        </td>
                        <td>
                          <ul css={cssObj.customUl}>
                            {company.welfare.etc?.map((etc, index) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <li key={index} css={cssObj.customLi}>
                                {etc}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
                <tr>
                  <td>
                    <span>노조</span>
                  </td>
                  <td>
                    <table css={cssObj.customTable}>
                      <tbody>
                        <tr>
                          <td>
                            <h3>여부</h3>
                          </td>
                          <td>{company.nozo.exists ? "O" : "X"}</td>
                        </tr>
                        <tr>
                          <td>
                            <h3>추가 정보</h3>
                          </td>
                          <td>{company.nozo.desc}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>공장</span>
                  </td>
                  <td>
                    {company.factoryArr.map((factory, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <table key={index} css={cssObj.customTable}>
                        <tbody>
                          <tr>
                            <td>
                              <h3>이름</h3>
                            </td>
                            <td>{factory.name}</td>
                          </tr>
                          <tr>
                            <td>
                              <h3>상태</h3>
                            </td>
                            <td>{factory.status}</td>
                          </tr>
                          <tr>
                            <td>
                              <h3>제품</h3>
                            </td>
                            <td>{factory.product}</td>
                          </tr>
                          <tr>
                            <td>
                              <h3>주소</h3>
                            </td>
                            <td>{factory.address}</td>
                          </tr>
                          <tr>
                            <td>
                              <h3>남직원 수</h3>
                            </td>
                            <td>{factory.male_number}</td>
                          </tr>
                          <tr>
                            <td>
                              <h3>여직원 수</h3>
                            </td>
                            <td>{factory.female_number}</td>
                          </tr>
                          <tr>
                            <td>
                              <h3>통근 버스</h3>
                            </td>
                            <td>
                              {factory.bus.exists ? "O" : "X"} / {factory.bus.desc}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h3>기숙사</h3>
                            </td>
                            <td>
                              {factory.dormitory.exist ? "O" : "X"} / {factory.dormitory.desc}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div css={cssObj.rejectContainer}>
          <span>반려 사유</span>
          <textarea css={cssObj.rejectReason} value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} />
        </div>
        <div css={cssObj.buttonGroup}>
          <button type="button" css={cssObj.customButton} onClick={() => accept && accept(managerId)}>
            승인
          </button>
          <button
            type="button"
            css={cssObj.customButton}
            onClick={() => reject && reject(managerId, rejectReason.length === 0 ? null : rejectReason)}
          >
            반려
          </button>
          <button type="button" css={cssObj.customButton} onClick={close}>
            닫기
          </button>
        </div>
      </div>
    </ModalComponent>
  );
};
