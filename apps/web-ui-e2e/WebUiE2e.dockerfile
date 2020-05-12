FROM cypress/included:3.2.0

COPY . /e2e

WORKDIR /e2e

RUN yarn install --silent

ENTRYPOINT ["yarn", "e2e", "web-ui-e2e", "--headless"]
