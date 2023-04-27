export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PWD_REGEXP = /^\S*$/;

export const NUMBER_REGEXP = /^[0-9]+$/;

export const URL_REGEXP = /(http(s)?:\/\/|mailto:)([a-z0-9\w]+[.-]?)*[a-z0-9]{2,4}/gi;
