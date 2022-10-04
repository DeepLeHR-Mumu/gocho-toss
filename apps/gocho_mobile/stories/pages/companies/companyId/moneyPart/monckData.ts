import { MockingMother } from "../mockingMother";

export const NORMAL = { ...MockingMother };

export const PAY_AVG_NULL = { ...MockingMother, data: { ...MockingMother.data, pay_avg: null } };

export const PAY_START_NULL = { ...MockingMother, data: { ...MockingMother.data, pay_start: null } };

export const PAY_NULL = { ...MockingMother, data: { ...MockingMother.data, pay_start: null, pay_avg: null } };
