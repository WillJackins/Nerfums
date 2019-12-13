package common.util;

import java.util.Optional;
import java.util.function.Supplier;

public final class Safely {

    // Util class - no instantiatiom
    private Safely() {
    }

    public static <T> Optional<T> get(Supplier<T> tSupplier) {
        try {
            return Optional.ofNullable(tSupplier.get());
        } catch (NullPointerException | NumberFormatException | ArrayIndexOutOfBoundsException e) {
            return Optional.empty();
        }
    }
}
