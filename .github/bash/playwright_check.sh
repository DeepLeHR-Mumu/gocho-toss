#!/bin/bash

if pnpm list | grep "turbo";
    then ;
    else pnpm add turbo && pnpm list | grep "turbo";
fi

if pnpm list | grep "playwright";
    then pnpm turbo $1;
    else pnpm add @playwright/test@1.28.0 && pnpm turbo $1;
fi