import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { DynamicEmbeddedWidget } from '@dynamic-labs/sdk-react-core';
import './index.css';

const envId = import.meta.env.VITE_DYNAMIC_ENV_ID as string;

export default function App() {
    return (
        <DynamicContextProvider
            theme="light"
            settings={{
                environmentId: envId,
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
            {/* Full-page layout */}
            <div className="login-page">
                <section className="login-hero">
                    <div className="login-hero-content">
                        <div className="logo-row">
                            <div className="logo-circle">K</div>
                            <span className="logo-text">KiteApp</span>
                        </div>
                        <h1>Wallet login, without the pain.</h1>
                        <p>
                            Connect with embedded wallets, socials, and email – powered by Dynamic.
                        </p>
                        <ul className="login-bullets">
                            <li>✅ Embedded wallets fully in your control</li>
                            <li>✅ Simple login via email or socials</li>
                            <li>✅ Multi-chain ready</li>
                        </ul>
                    </div>
                </section>

                <section className="login-panel">
                    <div className="login-panel-inner">
                        <DynamicEmbeddedWidget background="none" />

                        <p className="login-footer-text">
                            By continuing you agree to our{' '}
                            <a href="/terms" target="_blank">Terms</a> &nbsp;and&nbsp;
                            <a href="/privacy" target="_blank">Privacy Policy</a>.
                        </p>
                    </div>
                </section>
            </div>
        </DynamicContextProvider>
    );
}
