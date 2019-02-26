---
title: Utilizing Feature Branching to Minimize Risk
date: 2019-02-25T00:00:00-0600
excerpt: >
  Think about a time when you ran a demo for your product owner, and he or she
  told you they didn't like how one of your features turned out. You had to pull
  the feature out of the sprint increment if you hoped to avoid missing a
  release. In a situation like this, your team's diligence in following standard
  version control practices determines how costly this operation is.
tags:
  - git
  - version control
---

Think about a time when you ran a demo for your product owner, and they told
you they didn't like how one of your features turned out. You had to pull the
feature out of the sprint increment if you hoped to avoid missing a release. In
a situation like this, your team's diligence in following standard version
control practices determines how costly this operation is.

No matter what your team's version control practices are, there is only one
major thing that matters in a situation where you must yank a feature: does
your team utilize feature branches? If your team doesn't use feature branches,
yanking a feature from a release more than likely is nearly impossible. The
feature's commits would be interspersed between other commits. Having to revert
each of your feature's commits, potentially resolving merge conflicts each time,
is a huge risk.

On the other hand, the job is really easy if your team does use feature
branching. In this case, your feature was either merged into the development
branch or rebased onto it. If it was rebased, you can revert each commit in
reverse order since they should all be right next to each other. This case is
still risky though, as there is still potential for merge conflicts for every
single commit you must revert. Your team takes on the least risk in this
operation if, rather than rebased onto the development branch, a merge commit
was created. It then becomes trivial to yank the feature simply by reverting
that feature's merge commit. No matter how many commits are in your feature,
there will be at most one merge conflict.

Whether your team prefers rebasing or merge commits the bottomline is this: use
feature branches. Your team is in a great place if it is already utilizing
feature branches. However, your team takes on the least amount of risk if it
prefers merge commits over rebasing when integrating features.
