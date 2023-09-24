import { normalizePhoneNumber } from '../normalizeNumber';

/**
 * Fetch the guest details
 * @param cellNumber
 * @returns
 */
export async function getGuest(cellNumber: string) {
  const trimmedNumber = cellNumber.trim();
  const normalizedNumber = normalizePhoneNumber(trimmedNumber);

  console.log(normalizedNumber);

  const response = await fetch(`/api/guests/${encodeURIComponent(normalizedNumber) || 'wrong'}`, {
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
  const trimmedNumber = cellNumber.trim();
  const normalizedNumber = normalizePhoneNumber(trimmedNumber);

  console.log(normalizedNumber);

  const response = await fetch(`/api/guests/${encodeURIComponent(normalizedNumber) || 'wrong'}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rsvp: rsvpDecision, vegetarian: dietOption || false }),
    method: 'PATCH',
  });

  return response.json();
}
