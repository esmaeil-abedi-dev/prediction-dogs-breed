require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const config = {
  setupFiles: ['dotenv/config'],
  testURL: 'http://localhost/',
  collectCoverageFrom: [
    '**/src/{utils,services,services/breed,replace-hardcode-text}/*.{js,ts}',
  ],
};

module.exports = config;
