window.APP_CONFIG = {
  remoteVoting: {
    // Set to true after configuring your Firebase Realtime Database URL.
    enabled: true,
    // Example: https://your-project-id-default-rtdb.europe-west1.firebasedatabase.app
    firebaseDatabaseUrl: 'https://bergpaladijnen-default-rtdb.europe-west1.firebasedatabase.app/',
    // How often clients refresh votes from remote storage.
    pollIntervalMs: 8000,
  },
};
