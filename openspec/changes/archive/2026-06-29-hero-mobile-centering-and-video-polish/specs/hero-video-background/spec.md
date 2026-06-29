## ADDED Requirements

### Requirement: Loading indicator only during genuine buffering

The hero video background SHALL display its loading indicator only while the active (visible) video is actually loading or buffering — for example before the first clip can play, or when playback is waiting/stalled for data. The indicator SHALL NOT be shown during normal playback, nor during a routine clip-to-clip transition, nor merely because a hidden background layer is preloading.

#### Scenario: Spinner shows before first playable frame

- **WHEN** a hero mounts and its first clip has not yet reached a playable state
- **THEN** the loading indicator is visible

#### Scenario: Spinner hidden during normal playback

- **WHEN** the active hero clip is playing and advancing in time
- **THEN** the loading indicator is not visible

#### Scenario: Spinner hidden during clip transitions

- **WHEN** the hero switches from one clip to the next while the next clip is ready
- **THEN** no loading indicator appears during the switch

#### Scenario: Spinner reappears only on real stall

- **WHEN** the active clip stalls and must buffer (e.g. a `waiting`/`stalled` condition) during playback
- **THEN** the loading indicator is shown until playback resumes
- **AND** it is hidden again once the clip resumes playing

### Requirement: Stutter-free hard-cut handoff

The hard-cut hero player SHALL switch to the incoming clip only once that clip has enough buffered data to play without stalling, so the transition does not stutter.

#### Scenario: Cut waits for incoming readiness

- **WHEN** the current clip ends but the incoming clip is not yet ready to play through
- **THEN** the player waits for the incoming clip to become ready before cutting, rather than cutting to a stalling clip

#### Scenario: Clean cut when incoming is ready

- **WHEN** the current clip ends and the incoming clip is already buffered
- **THEN** the switch happens immediately with no visible stutter or blank frame
