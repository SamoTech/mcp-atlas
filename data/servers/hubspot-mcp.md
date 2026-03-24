# Server Profile: HubSpot MCP

## Summary
HubSpot's MCP server connects AI agents to the full CRM — contacts, companies, deals, tickets, emails, and marketing workflows — enabling bidirectional revenue automation.

## Enterprise use cases
- AI-driven lead enrichment and contact creation from inbound signals.
- Deal pipeline querying and stage updates from sales agents.
- Support ticket creation and routing from service agents.
- Marketing workflow trigger automation.

## Auth model
- HubSpot Private App token with granular scope selection.
- OAuth app for marketplace or multi-tenant deployments.

## Common permissions
- Read/write contacts, companies, deals, tickets.
- Read email engagements and marketing campaigns.
- Trigger workflow enrollment.

## Risk notes
- Broad CRM token can expose entire contact database — always scope to minimum objects.
- Write access to deals can corrupt pipeline data if agent logic has errors.
- Recommend read-only mode for analytics and reporting agents.

## Typical deployment pattern
- Bidirectional bridge with Gong, Salesforce, or Slack.
- Hub-and-spoke CRM data layer for revenue intelligence agents.

## Known public references
1. HubSpot MCP integration announcement.
2. HubSpot developer documentation: MCP server.
