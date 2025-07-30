# Just Ask Your AI: "Analyze This Video File"

Had a random thought while debugging yet another FFprobe installation issue: **What if I could just ask Claude to analyze a video file for me?**

Turns out, with MCP (Model Context Protocol) servers, you actually can.

## The Setup

We built a hosted MCP server for Probe.dev:

```json
// Add this to your ~/.cursor/mcp.json or Claude Desktop config
{
  "mcpServers": {
    "probe-dev": {
      "url": "https://mcp.probe.dev/",
      "headers": {
        "Authorization": "Bearer your-api-token"
      }
    }
  }
}
```

Restart your AI assistant and you're done.

## Why This Matters

Instead of remembering FFprobe syntax and parsing JSON manually, you just ask:

> "Can you analyze this video and tell me if it meets Apple's HLS requirements?"

> "Use MediaStreamValidator to check if this HLS stream will pass App Store review"

> "Run both FFprobe and MediaInfo on this file and show me where they disagree"

The AI handles the API calls, parses results, and gives you human-readable answers.

## Why We Went Hosted

Could've built a local MCP server, but maintenance sucks. Our hosted version:

- Always up-to-date with latest API changes
- Zero dependencies to manage
- Works across all your devices  
- Modern HTTP transport
- Built-in authentication handling

## The Bigger Picture

MCP is becoming the standard way for AI assistants to connect to external services. Instead of copy-pasting API responses, your AI can directly search docs, make API calls, parse responses, and combine data sources.

It's like giving your AI assistant actual tools instead of just making it read text.

**Setup guide:** [docs.probe.dev/guides/mcp-integration](https://docs.probe.dev/guides/mcp-integration)

#VideoEngineering #AI #MediaAnalysis #MCP #DeveloperTools 