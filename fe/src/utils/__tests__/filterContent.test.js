import filterContet from '../filterContent'

describe('filterContet', () => {
    test('should return the same content', () => {
        expect(filterContet('content')).toBe('content')
    })

    test('should change alien to redacted badge', () => {
        expect(filterContet('content alien')).toBe('content <span class="badge">redacted</span>')
    })

    test('should change xeno to redacted badge', () => {
        expect(filterContet('content xeno')).toBe('content <span class="badge">redacted</span>')
    })

    test('should change multiple alien and xeno to redacted badge', () => {
        expect(filterContet('alien xeno content xeno')).toBe('<span class="badge">redacted</span> <span class="badge">redacted</span> content <span class="badge">redacted</span>')
    })

    test('should change multiple alien and xeno to redacted badge', () => {
        expect(filterContet('ALIEN XENO content xeno')).toBe('<span class="badge">redacted</span> <span class="badge">redacted</span> content <span class="badge">redacted</span>')
        expect(filterContet('AlIeN XeNo content xeno')).toBe('<span class="badge">redacted</span> <span class="badge">redacted</span> content <span class="badge">redacted</span>')
    })
})
