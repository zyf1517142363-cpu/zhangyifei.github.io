---
title: "The Craft of Writing Good Code"
date: "2024-12-05"
description: "Reflections on what makes code good, and why it matters more than ever."
tags: ["Engineering", "Best Practices"]
---

There's a difference between code that works and code that's well-crafted. In an era of AI-assisted development, understanding this distinction becomes even more important.

## What Makes Code Good?

Good code has several qualities:

**It's readable.** Code is read far more often than it's written. Optimize for the reader.

**It's correct.** Not just in the happy path, but in all the edge cases that real users will encounter.

**It's maintainable.** Six months from now, someone (possibly you) should be able to understand and modify it.

**It's simple.** The best solution is often the simplest one that could possibly work.

## The Readability Principle

Consider these two implementations:

```python
# Version 1
def f(x):
    return [i for i in x if i % 2 == 0 and i > 0]

# Version 2
def filter_positive_even_numbers(numbers: list[int]) -> list[int]:
    return [
        num for num in numbers
        if num % 2 == 0 and num > 0
    ]
```

Both do the same thing. Version 2 is immediately understandable.

## Naming Things Well

The hardest problem in computer science isn't naming things—it's naming things *well*. Good names:

- Reveal intent
- Are consistent
- Avoid abbreviations
- Match the domain

```python
# Bad
def proc(d, t):
    ...

# Good
def process_payment(transaction: Transaction) -> Receipt:
    ...
```

## The Art of Abstraction

Abstraction is powerful but dangerous. Good abstraction:

- Hides complexity
- Reveals essential structure
- Has clear boundaries
- Doesn't leak implementation details

Bad abstraction adds complexity without reducing it. When in doubt, keep it simple.

## Error Handling

Good error handling is invisible in normal operation and informative when things go wrong:

```python
def load_config(path: Path) -> Config:
    if not path.exists():
        raise ConfigNotFoundError(f"Config file not found: {path}")
    
    try:
        data = path.read_text()
        return Config.parse(data)
    except ParseError as e:
        raise ConfigParseError(f"Invalid config at {path}: {e}") from e
```

## Testing as Design

Tests aren't just for verification—they're a design tool. Writing tests first forces you to think about:

- The interface you want
- How the code will be used
- What edge cases exist
- How errors should behave

## The AI Era

With AI tools generating more code, the craft of software engineering becomes more important, not less. AI can write code that works. Humans need to ensure it's:

- Correct for the right reasons
- Maintainable by the team
- Aligned with the system's architecture
- Safe and secure

## Continuous Improvement

Good code isn't written in one pass. It's refined through:

- Self-review before requesting peer review
- Refactoring when patterns emerge
- Learning from production incidents
- Studying well-crafted open source code

The goal isn't perfection—it's continuous improvement. Every piece of code you write is an opportunity to get better at the craft.

Write code as if the person maintaining it is a sleep-deprived version of yourself at 3 AM. They'll thank you later.
