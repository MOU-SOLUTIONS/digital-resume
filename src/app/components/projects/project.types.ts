/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Interfaces
// ============================================================================
export interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly technologies: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly isPrivate?: boolean;
  readonly features?: readonly string[];
}
