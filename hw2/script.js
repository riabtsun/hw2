const API_URL = 'https://api.github.com/repos/riabtsun/hw2/blob/feature-resume-template/hw2/data/fighters.json';

const SECURITY_HEADERS = {
  headers: {
    authorization: "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"
  }
};

fetch(API_URL, SECURITY_HEADERS);
