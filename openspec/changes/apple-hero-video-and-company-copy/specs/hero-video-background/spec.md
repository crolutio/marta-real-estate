## ADDED Requirements

### Requirement: Apple-compatible hero media encoding

Every video file served to the hero video background SHALL be encoded in a container Safari can begin playing progressively. Each file MUST place its `moov` metadata atom before its `mdat` media data atom, and MUST NOT contain any audio or video track that Safari cannot decode — in particular no AC-3 audio track. A file MAY carry at most one AAC audio track.

#### Scenario: Metadata precedes media data

- **WHEN** any file in the homepage hero reel is inspected for top-level atom order
- **THEN** its `moov` atom appears before its `mdat` atom

#### Scenario: No undecodable audio track

- **WHEN** the audio streams of any file in the homepage hero reel are enumerated
- **THEN** at most one audio stream is present
- **AND** that stream is AAC
- **AND** no AC-3 stream is present

#### Scenario: First clip plays on iOS Safari

- **WHEN** a visitor opens the homepage in Safari on an iOS device
- **THEN** the first hero clip begins playing without requiring the full file to download
- **AND** the hero does not remain indefinitely on the loading indicator

#### Scenario: First clip plays on macOS Safari

- **WHEN** a visitor opens the homepage in Safari on macOS
- **THEN** the first hero clip begins playing
- **AND** the hero does not remain indefinitely on the loading indicator

### Requirement: Poster frame backs the hero video layers

The hero video background SHALL accept a poster image and apply it to every video layer it renders, across all player variants (single-clip, hard-cut and crossfade). The poster SHALL be visible before the first video frame has decoded, and SHALL remain visible if video playback never succeeds, so the hero never presents as an empty section.

#### Scenario: Poster shows before first frame

- **WHEN** a hero mounts and no video frame has decoded yet
- **THEN** the poster image is visible behind the hero content

#### Scenario: Poster persists on decode failure

- **WHEN** a hero video layer emits an `error` event and no frame can be decoded
- **THEN** the poster image remains visible
- **AND** the hero content stays legible over it
- **AND** the section is not left blank or transparent

#### Scenario: Poster applies to every variant

- **WHEN** the hero is configured as single-clip, as hard-cut, or as crossfade
- **THEN** each rendered video layer carries the poster image

### Requirement: Loading indicator does not outlive a failed load

When a hero video layer fails permanently, the hero video background SHALL stop showing its loading indicator and SHALL NOT re-show it for that layer, even if further buffering or stall events arrive from the failed element.

#### Scenario: Spinner clears on error

- **WHEN** the active hero video layer emits an `error` event
- **THEN** the loading indicator is hidden

#### Scenario: Spinner stays hidden after error

- **WHEN** a hero video layer has already failed with an `error` event
- **AND** that same layer subsequently emits a `stalled` or `waiting` event
- **THEN** the loading indicator is not shown again for that layer
