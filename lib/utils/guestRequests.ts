import { promises } from 'dns';

/**
 * Fetch the guest details
 * @param cellNumber
 * @returns
 */
export async function getGuest(cellNumber: string) {
  const trimmedNumber = cellNumber.trim();

  const response = await fetch(`/api/guests/${encodeURIComponent(trimmedNumber) || 'wrong'}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });

  return response.json();
}

/**
 * Update the RSVP status of the guest
 * @param cellNumber
 * @returns
 */
export async function updateGuest(
  cellNumber: string,
  rsvpDecision: boolean | undefined,
  dietOption: boolean | undefined,
) {
  const trimmedName = cellNumber.trim();

  const response = await fetch(`/api/guests/${encodeURIComponent(trimmedName) || 'wrong'}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rsvp: rsvpDecision, vegetarian: dietOption }),
    method: 'PATCH',
  });

  return response.json();
}
