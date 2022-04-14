import { find, update } from '../util/db';

const SUBSCRIBER_COLLECTION: string = 'subscribers';
async function run(): void {
    // get webhook subscribers without webhookMethod feild
    const subscribersWithoutWebhookMethod: $TSFixMe = await find(SUBSCRIBER_COLLECTION, {
        alertVia: 'webhook',
        webhookMethod: { $exists: false },
    });
    // update each subscriber by adding the field with a default value
    subscribersWithoutWebhookMethod.forEach((subscriber: $TSFixMe) => {
        update(
            SUBSCRIBER_COLLECTION,
            { _id: subscriber._id },
            { webhookMethod: 'post' }
        );
    });
}

export default run;
