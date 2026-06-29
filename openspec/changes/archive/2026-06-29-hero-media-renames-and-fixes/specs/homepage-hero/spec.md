## ADDED Requirements

### Requirement: Prominent homepage hero logo

The homepage hero logo SHALL be displayed at a prominent size, approximately 50% larger than the prior sizing, while preserving aspect ratio and left/top alignment.

#### Scenario: Logo renders larger

- **WHEN** a visitor views the homepage hero
- **THEN** the logo is rendered at the enlarged size (`h-48` on mobile, `h-60` on desktop) with `w-auto` aspect preserved
- **AND** the logo, tagline, headline, and CTA all remain visible without overflow

### Requirement: Flash-free homepage hero video transitions

The homepage hero background SHALL transition from one clip to the next without a visible flash, blank frame, or brightness pop between clips.

#### Scenario: Clean transition between clips

- **WHEN** the homepage hero finishes playing one clip and advances to the next
- **THEN** the change presents the next clip's frame directly with no intermediate flash or blank frame

#### Scenario: Continuous playback

- **WHEN** the homepage hero has played through all of its clips
- **THEN** playback continues by looping back to the first clip without stopping
