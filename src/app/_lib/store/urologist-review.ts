import { create } from 'zustand'

type StateProps = {
  refreshKey: number
  increaseRefreshKey: () => void
}

const useUrologistReviewStore = create<StateProps>((set) => ({
  /**
   * This store is purposely made to serve a "connection" between submit dialog and urologist review list.
   * We want to avoid props drilling and hard reloading the page. So with this key, we can trigger re-render when
   * user submit the review inside the dialog and urologist review list component will re-fetching the data.
   */
  refreshKey: 0,
  increaseRefreshKey: () => set((state) => ({ refreshKey: state.refreshKey + 1 })),
}))

export default useUrologistReviewStore
