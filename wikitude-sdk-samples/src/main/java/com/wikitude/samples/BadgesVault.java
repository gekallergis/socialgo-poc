package com.wikitude.samples;

import com.wikitude.sdksamples.R;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BadgesVault {
    public static String[] badges = {"Microphone", "Drums", "Guitar"};
    public static Map<String, Integer> images;

    static
    {
        images = new HashMap<>();
        images.put("Microphone", R.drawable.micro);
        images.put("Drums", R.drawable.drums);
        images.put("Guitar", R.drawable.guitar);
    }

    private static List<String> collectedBadges = new ArrayList<>();

    public static void addBadge(int id) {
        collectedBadges.add(badges[id]);
    }

    public static String[] getBadges() {
        return collectedBadges.toArray(new String[0]);
    }

    public static Integer[] getImages() {
        List<Integer> imagesToReturn = new ArrayList<>();

        for (Map.Entry<String, Integer> entry : images.entrySet())
        {
            if(collectedBadges.contains(entry.getKey())) {
                imagesToReturn.add(entry.getValue());
            }
        }
        return imagesToReturn.toArray(new Integer[0]);
    }
}
