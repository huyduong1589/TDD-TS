FROM huyduong1589/nodejs-express:golden

COPY TDD-TS/ opt/TDD-TS

WORKDIR opt/TDD-TS/

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start"]
