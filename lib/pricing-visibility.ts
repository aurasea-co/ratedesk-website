// One switch for every price on this site. Same variable name across all five
// deployments so it is one thing to remember, not five.
//
// Default OFF: a deployment that forgets the variable shows no price rather
// than showing one to a build partner who should not see it yet. Nothing is
// deleted — flipping NEXT_PUBLIC_SHOW_PRICING to 'true' restores everything
// with no code change.
export function showPricing(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_PRICING === 'true'
}
