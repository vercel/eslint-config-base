#!/usr/bin/env sh
eslint \
  --max-warnings 0 \
  --report-unused-disable-directives \
  "$@"
