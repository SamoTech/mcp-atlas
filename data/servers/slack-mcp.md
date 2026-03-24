# Server Profile: Slack MCP

## Summary
Slack MCP gives agents channel context, message retrieval, and response workflows inside enterprise collaboration spaces.

## Enterprise use cases
- Conversation summarization.
- Support escalation.
- Workflow triggers from chat.

## Auth model
- Bot token or OAuth.

## Common permissions
- Read channel history.
- Post messages.
- Resolve thread context.

## Risk notes
- Channel overreach can expose private conversations.
- Posting automation needs strong guardrails.

## Typical deployment pattern
- Read-mostly collaboration bundle.
- Gateway-enforced channel scoping.

## Known public references
1. Block Goose enterprise rollout.
