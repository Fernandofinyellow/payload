const Sentry = require('@sentry/node');
const os = require('os');

const init = () => {
  Sentry.init({
    dsn: "https://139de3d0197f464082d5715a0c48a497@o589961.ingest.sentry.io/5739829",
    tracesSampleRate: 1.0,
  });

  Sentry.setTags({
    os_type: os.type(),
    os_platform: os.platform(),
    os_release: os.release(),
    node_version: process.version,
  });

  return Sentry.startTransaction({
    op: "create-payload-app",
    name: "New Project",
  });
}

const setTags = (tags) => {
  Sentry.setTags({ ...tags });
}

const handleException = (e) => {
  Sentry.captureException(e);
}

module.exports = {
  init,
  setTags,
  handleException,
};