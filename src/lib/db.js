let subscriptions = [];

export const saveSubscription = async (subscription) => {
  subscriptions.push(subscription);
};

export const getSubscriptions = async () => subscriptions;
