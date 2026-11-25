# The World in One Picture — 25 November 2026

A newspaper front-page poster summing up five world news stories from
Wednesday, 25 November 2026. `main.ts` (Node 22, standard library only)
copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).

## The five stories

1. **Mines in the Strait** — Two oil tankers struck naval mines early on
   Wednesday while crossing the Strait of Hormuz, catching fire in their
   engine rooms, according to Iran's Revolutionary Guard Corps Navy — a day
   after it claimed three other tankers hit mines.
   Source: Press TV, 25 Nov 2026 —
   https://www.presstv.co.uk/Detail/2026/11/25/781551/two-oil-tankers-catch-fire-after-hitting-naval-mines-in-strait-of-hormuz-irgc

2. **Pakistan reaches the stars** — China's Shenzhou-24 launched at 08:18
   Beijing time and docked with the Tiangong space station at 11:56, carrying
   Muhammad Zeeshan Ali, 40 — the first Pakistani in orbit and the first
   foreign astronaut to board Tiangong. He will stay 5–10 days as payload
   specialist.
   Source: Reuters, 25 Nov 2026 —
   https://www.reuters.com/science/chinas-shenzhou-24-space-flight-takes-off-with-pakistani-national-first-foreign-2026-11-25/

3. **Cartagena freed** — Colombian special forces stormed an Éxito
   supermarket in Cartagena in the early hours of Wednesday, freeing all
   remaining hostages and ending a day-long siege. About 30 people were
   seized after a failed armoured-car robbery; 10 were released on Tuesday.
   One captor was killed and four detained.
   Source: Reuters, 25 Nov 2026 —
   https://www.reuters.com/world/americas/all-hostages-held-colombian-supermarket-freed-afp-reports-2026-11-25/

4. **Riyadh under fire again** — Yemen's Houthis said on Wednesday they had
   attacked Saudi Arabia's Ras Tanura oil refinery and Riyadh's financial
   district, a day after a drone strike on Riyadh's tallest tower, the PIF
   Tower, wounded 11 people.
   Source: Reuters, 25 Nov 2026 —
   https://www.reuters.com/world/middle-east/yemens-houthis-say-they-attacked-saudi-oil-refinery-riyadh-financial-district-2026-11-25/

5. **Tariff wave coming** — The Trump administration is poised to release the
   findings of a Section 301 probe into alleged excess industrial capacity in
   16 major US trading partners — including China, the EU, India and Japan —
   with new import duties expected to stack on top of existing tariffs.
   Source: Reuters, 25 Nov 2026 —
   https://www.reuters.com/world/us/trump-administration-set-unveil-new-tariffs-after-probe-on-excess-factory-2026-11-24/

## Verify locally

```sh
mkdir -p /tmp/out1125 && MAKEFUN_OUTPUT_DIR=/tmp/out1125 node main.ts
```

The output must be byte-identical to `entry.png` (1024×1024, 730,340 bytes).
