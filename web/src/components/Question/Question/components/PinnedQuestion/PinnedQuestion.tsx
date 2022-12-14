import { Icon } from 'src/components/Icon'

const PinnedQuestion = () => {
  return (
    <div
      className="flex gap-1 uppercase font-slab text-xs text-black py-2 font-extrabold absolute -top-9"
      data-testid="pinnedQuestion"
    >
      <Icon name="pin" />
      Pinned Question
    </div>
  )
}

export { PinnedQuestion }
