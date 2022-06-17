import Foundation

@objc public class Sensores: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
