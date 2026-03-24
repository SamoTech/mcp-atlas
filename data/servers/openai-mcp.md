# Server Profile: OpenAI MCP

## Summary
OpenAI's MCP server exposes its API platform — completions, assistants, fine-tuning jobs, file uploads, vector stores, and usage metrics — as agent-callable tools.

## Enterprise use cases
- Agent-driven fine-tuning job management and dataset upload.
- Vector store population and retrieval for RAG pipelines.
- Cost and usage monitoring for LLM consumption dashboards.
- Assistant thread management for multi-agent orchestration.

## Auth model
- OpenAI API key; project-scoped keys recommended.
- Organization-level keys can access all projects — use minimum scope.

## Common permissions
- Read models, assistants, threads, files.
- Create completions, embeddings, fine-tuning jobs.
- Upload and manage files and vector stores.

## Risk notes
- API key leakage results in immediate billing exposure.
- Fine-tuning and batch job creation can incur significant costs — add spending limits.
- Thread and assistant data may contain sensitive user conversations.

## Typical deployment pattern
- Hub-and-spoke for multi-agent orchestration.
- Federated registry in platforms exposing multiple AI providers.

## Known public references
1. OpenAI platform MCP integration documentation.
2. OpenAI Responses API with built-in MCP tool support.
