# Probe.dev API Documentation

Official documentation for the Probe.dev media analysis API, built with [Mintlify](https://mintlify.com).

## 🚀 Live Documentation

Visit our documentation at **[docs.probe.dev](https://docs.probe.dev)**

## 📖 What's Included

This documentation covers:

- **Getting Started** - Quick setup and authentication
- **API Reference** - Complete endpoint documentation with interactive playground
- **Integration Guides** - Report types, media sources, and migration from local tools
- **Format References** - Audio codecs, video codecs, and container formats

## 🛠️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/en) (v16 or higher)
- [Mintlify CLI](https://www.npmjs.com/package/mintlify)

### Setup
```bash
# Install Mintlify CLI globally
npm i -g mintlify

# Navigate to the docs directory
cd docs

# Start development server
mintlify dev
```

The documentation will be available at `http://localhost:3000`

### Making Changes
1. Edit any `.mdx` files or update `docs.json` configuration
2. Changes will automatically reload in your browser
3. Commit and push to deploy to production

## 🔧 Architecture

- **Framework**: Mintlify
- **Content**: MDX files with React components
- **Styling**: Custom CSS with Probe.dev branding
- **API Integration**: OpenAPI 3.0+ specification
- **Analytics**: Google Analytics 4
- **Deployment**: Automatic via GitHub integration

## 📁 Structure

```
docs/
├── docs.json              # Mintlify configuration
├── index.mdx             # Homepage
├── quickstart.mdx        # Quick start guide
├── authentication.mdx    # Authentication guide
├── api-reference/        # API endpoint documentation
├── guides/              # Integration guides
├── reference/           # Format and codec references
├── logo/               # Probe.dev brand assets
└── styles.css          # Custom Probe.dev styling
```

## 🚀 Deployment

Documentation is automatically deployed to [docs.probe.dev](https://docs.probe.dev) when changes are pushed to the `main` branch.

## 📞 Support

- **Discord**: [Join our community](https://discord.gg/kYvSfywhru)
- **Website**: [probe.dev](https://probe.dev)
- **API Status**: [status.probe.dev](https://status.probe.dev)

---

Built with ❤️ by the Probe.dev team
