---
layout: post
title: "Don't Trust, Run It"
date: 2026-10-22 12:00:00 +0200
author: "Yukio Mizuta"
description: "Running your own Bitcoin node is not a technical hobby. It is the moment 'don't trust, verify' stops being a slogan and becomes something you do."
image: /assets/images/dont-trust-run-it-mizuta.webp
categories: [bitcoin, sovereignty]
tags: [bitcoin, full-node, self-sovereignty, verification, lightning, hayek]
---

![Don't Trust, Run It](/assets/images/dont-trust-run-it-mizuta.webp)

"Don't trust. Verify."

Every Bitcoiner has said it.
Most have printed it on a T-shirt.
Very few have actually done it.

Because verifying is not a mindset. It is a machine. A small one, humming in a corner of your home, checking every rule of the network without asking anyone for permission — and without asking anyone for their opinion.

For years I said the slogan. This month, I finally lived it.

---

## The Comfortable Middle

My first node was a plug-and-play box. One image, one dashboard, a store full of apps. It worked — until it didn't.

The chain fell behind. The RPC broke in ways I couldn't see. Every fix meant waiting for someone else's update, someone else's container, someone else's decision about how my node should behave.

It was a node, technically. But it was also a quiet form of trust.

Not trust in a bank.
Not trust in a government.
Trust in a layer I didn't understand, maintained by people I had never met, doing things I couldn't audit.

That is the comfortable middle: you own the hardware, but not the knowledge. You run the software, but you don't *run* it.

So I wiped the disk and started again.

---

## Building It by Hand

Bitcoin Core, compiled and configured line by line.
An Electrum server, so my wallets ask *my* node about *my* coins — not someone else's server.
A block explorer, so I can see the mempool through my own eyes.
Lightning, routed through Tor.
And backups, because sovereignty without a recovery plan is just a different way to lose everything.

None of this is glamorous. Most of it is reading documentation, fixing typos in config files, and watching a progress bar crawl through sixteen years of blocks.

But something changes while that progress bar moves.

Every block since January 2009 passes through your machine. Every transaction is checked against the same rules everyone else follows. Every coin is accounted for — 21 million, not one satoshi more — and *you* are the one counting.

Not a company. Not an explorer website. Not a "trusted" API.

You.

---

## Verification Is a Vote That Can't Be Faked

A full node doesn't mine. It doesn't earn. It doesn't speculate.

It does something more important: **it refuses.**

It refuses invalid blocks.
It refuses inflated supply.
It refuses rule changes nobody agreed to.

This is the part most people miss. Bitcoin's rules are not enforced by miners, developers, or exchanges. They are enforced by the thousands of ordinary machines that simply say *no* to anything that breaks them.

Hayek wrote that the knowledge needed to coordinate a society is dispersed — that no central authority could ever gather it. Bitcoin takes that insight one step further: the *enforcement* is dispersed too.

There is no headquarters of the rules.
There is only a network of people who check.

Every node you run is one more checkpoint the old system can't buy, pressure, or switch off.

---

## Sovereignty Has Friction

I won't pretend it was smooth.

My VPN blocked my own tunnel. My disk refused to boot. A placeholder in a config file cost me an evening. At one point I had to choose between convenience and verification, and convenience was very persuasive.

That friction is not a bug. It is the price of not outsourcing.

Every intermediary in history sold the same product: *we'll handle the hard part.* And every one of them eventually charged for it — in fees, in data, in permission, in control.

Running your own node means accepting the hard part. In exchange, you get something no service can sell you: **the certainty that what you see is true.**

---

## Even Lightning Reminds You

Once the node was running, I opened my first Lightning channel. And immediately I met the next frontier: liquidity is not free. To receive, someone has to open a channel toward you — and they charge for it.

Is that a new intermediary? Or a free market for liquidity, with open competition and no gatekeeper?

That question deserves its own essay. But here is what matters: I could ask it *from my own node*, verifying every payment that touches it.

The question is only interesting once you are standing on your own ground.

---

## The Quiet Declaration

Running a node changes nothing you can see.

Your balance is the same.
Your coins are the same.
The price is the same.

What changes is you. You stop being a user of Bitcoin and become a participant in it. You stop asking "is this true?" and start knowing.

The slogan was never "don't trust, read about verification."
It was never "don't trust, let someone verify for you."

It was always the harder, simpler thing:

**Don't trust. Run it.**
