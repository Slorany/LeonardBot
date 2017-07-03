        var ret;

        if (arr.length > 0) {
            ret = arr[Math.floor(Math.random() * arr.length)];
        } else {
            ret = null;
        }

        return ret;
    }
