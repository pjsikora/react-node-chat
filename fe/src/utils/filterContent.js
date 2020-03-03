function filterContent(msg) {
    const badge = '<span class="badge">redacted</span>';

    return msg.replace(/alien/ig, badge).replace(/xeno/ig, badge);
}

export default filterContent;
