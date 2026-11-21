---
name: octarine-orders
description: Use when making the hero act in Deadlock (using an ability or an item, moving).
---

# Acting in Deadlock

- Abilities are used from the movement command: subscribe to `CreateMove` (`Events.on("CreateMove", (cmd:
  UserCmd) => …)`) and call `ability.Use(cmd)` once per command while it `CanBeCasted()`.
- The local hero is `LocalPlayer?.Hero` (a `PlayerPawn`); its abilities are `hero.Spells`, entries that may
  be empty (`spell?.AbilitySlot`, an `EAbilitySlots`).
- Anything that acts by itself is off by default and bound to a key or a switch of its own.
