Template.body.events {
  ".clear-content click": (e) ->
    e.preventDefault()

    if confirm('Clear page content?')
      $('.content-form')[0].reset()
}
