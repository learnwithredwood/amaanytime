import { Icon } from 'src/components/Icon'

const PinnedQuestion = () => {
  return (
    <div
      className="absolute -top-9 flex gap-1 py-2 font-slab text-xs font-extrabold uppercase text-black"
      data-testid="pinnedQuestion"
    >
      <Icon name="pin" />
      Pinned Question
    </div>
  )
}

export { PinnedQuestion }
