#!/bin/bash

if pnpm list | grep "playwright";
    then cd ../.. && pnpm turbo $1;
    else cd ../.. &&  pnpm add @playwright/test@1.28.0 && pnpm turbo $1;
fi