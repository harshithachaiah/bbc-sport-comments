module.exports = {
    totalComments: "div.ssrcss-1xq097l-TotalCommentsText",
    commentSection: "div.ssrcss-zr5vrn-HeadingWrapper h2:has-text('Join the conversation')",
    commentBox: "textarea[placeholder='Add your comment...']",
    cancelButton: "button[data-testid='cancel-comment']",
    postButton: "button[data-testid='post-comment']",
    articlesWithComments: "span[data-testid='participate:comments']",
    sportNavButton: "span.ssrcss-uvrl0v-NavItemHoverState.eki2hvo16 >> text=Sport",

    // Sort dropdown locators
    sortDropdown: 'select[data-testid="select"]',
    sortOptions: {
        NewestFirst: 'NewestFirst',
        OldestFirst: 'OldestFirst',
        HighestRated: 'HighestRated',
        MostRepliesFirst: 'MostRepliesFirst'
    },
};
