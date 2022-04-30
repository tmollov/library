export interface CreateCommentModel {
  bookId: string,
  userId: string,
  commentText: string,
  rating?: number
}
