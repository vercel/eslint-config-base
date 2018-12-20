FROM koalaman/shellcheck:v0.4.7 AS shellcheck
FROM mhart/alpine-node:10
COPY --from=shellcheck /bin/shellcheck /bin/shellcheck
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY index.js init.js package.json zeit-eslint.sh ./
RUN yarn lint
RUN yarn test
RUN mkdir /public && echo Tests passed > /public/index.html
