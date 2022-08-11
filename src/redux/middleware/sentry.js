import * as Sentry from '@sentry/react-native';

export function setSentryConfig(item) {
    Sentry.setUser({
        email: item?.users?.email,
        username: item?.session?.employeename,
    });
}
