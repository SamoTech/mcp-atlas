#!/usr/bin/env python3
"""
MCP Atlas — Data Validation Script
Runs basic completeness checks on all case study files.
"""

import os
import sys

REQUIRED_FIELDS = [
    "Company",
    "Industry",
    "Use Case",
    "Connected Systems",
    "Architecture Pattern",
    "Governance Controls",
    "Source Links",
]

CASES_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "cases")


def validate_case(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    errors = []
    for field in REQUIRED_FIELDS:
        if field not in content:
            errors.append(f"Missing required field: {field}")

    return errors


def main():
    all_passed = True
    cases = [f for f in os.listdir(CASES_DIR) if f.endswith(".md")]

    if not cases:
        print("No case files found.")
        sys.exit(1)

    for case_file in cases:
        path = os.path.join(CASES_DIR, case_file)
        errors = validate_case(path)
        if errors:
            all_passed = False
            print(f"❌ {case_file}:")
            for e in errors:
                print(f"   - {e}")
        else:
            print(f"✅ {case_file}: OK")

    if not all_passed:
        print("\nValidation failed. Fix the above errors before submitting.")
        sys.exit(1)
    else:
        print("\nAll case studies passed validation.")


if __name__ == "__main__":
    main()
