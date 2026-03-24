# Server Profile: Salesforce MCP

## Summary
Salesforce MCP connects agents to CRM records, account context, pipeline stages, and revenue workflows.

## Enterprise use cases
- Opportunity research.
- Sales-assistant enrichment.
- Bidirectional revenue workflow orchestration.

## Auth model
- OAuth with org policy controls.

## Common permissions
- Read accounts, contacts, opportunities.
- Update selected CRM fields.

## Risk notes
- Incorrect writes can corrupt pipeline data.
- CRM access often carries customer-sensitive information.

## Typical deployment pattern
- Bidirectional bridge.
- Write-back gated by platform logic.

## Known public references
1. Gong MCP announcement.
