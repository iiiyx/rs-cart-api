import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 * @returns {string}
 */
export function getUserIdFromRequest(request: AppRequest): string {
  return 'd155f96a-9cb9-4f05-b80f-8327d1eafca4'; //request.user && request.user.id;
}
