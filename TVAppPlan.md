# TV Price Comparison iOS App - Business & Technical Plan

## Concept
A utility-focused app for TV shopping, helping users find the best deals through real-time price comparison and historical data.

## Business Strategy: Local-First Freemium
### Core Constraints
- **Local-Only:** No user login or registration. All data (watchlists, alerts, pro status) is stored on-device using MMKV/Keychain.
- **Monetization:**
  - **Affiliate Commissions:** Primary revenue stream via redirected links.
  - **Pro Tier (IAP):** Monthly ($4.99) and Annual ($39.99) subscriptions managed via Apple IAP.

### Tier Features
| Feature | Free Tier | Pro Tier (IAP) |
| :--- | :--- | :--- |
| **Price History** | 30 Days (static) | 1 Year (interactive) |
| **Watchlist/Alerts** | Max 3 active | Unlimited |
| **Comparison** | Basic specs | Advanced side-by-side |
| **Ads** | Yes | No ads |

## Technical Architecture
- **Framework:** React Native + Expo.
- **Local Storage:** MMKV (key-value storage) for performance.
- **Data Ingestion:** Periodic sync of JSON snapshots from a central source.
- **Pro Tier Management:** Apple Store IAP native integration (local receipt validation).

## Development Priorities (MVP)
1. **Scraper Engine:** Build reliable aggregators for major retailers.
2. **UI/UX Core:** Fast, clean search results interface.
3. **IAP Integration:** Implement the Pro-tier unlocking flow.

