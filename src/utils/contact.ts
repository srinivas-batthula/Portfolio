// utils/contact.ts
import { ContactForm, ContactFormErrors, ContactFormValues } from '@/types';
import { saveToIndexedDB } from '@/utils';

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
    const errors: ContactFormErrors = { name: '', email: '', msg: '' };

    if (!values.name) errors.name = 'UserName is required!';

    if (!values.email) {
        errors.email = 'E-mail is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'E-mail is Invalid!';
    }

    if (!values.msg) errors.msg = 'Message is Required!';

    return errors;
}

export async function storeOfflineRequest(values: ContactFormValues): Promise<void> {
    const request: ContactForm = {
        id: Date.now(),
        body: { name: values.name, email: values.email, message: values.msg },
        url: process.env.NEXT_PUBLIC_CONTACT_API_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'pipedream/1',
        },
    };

    await saveToIndexedDB(request, 'contactForm');

    try {
        if ('serviceWorker' in navigator && 'SyncManager' in window) {
            const reg = await navigator.serviceWorker.ready;
            await reg.sync.register('sync-share');
            console.log('Background sync registered.');
        }
    } catch (err) {
        console.error('Sync setup failed, saving locally:', err);
    }
    return;
}
