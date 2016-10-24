package com.wikitude.samples;

import android.app.ListActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;

import com.wikitude.sdksamples.R;

public class Badges extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.badges);

        // extract names of samples from res/arrays
        final String[] values = BadgesVault.getBadges();
        final Integer[] iamges = BadgesVault.getImages();

        // use default list-ArrayAdapter */
        this.setListAdapter(new CustomListAdapter(this, values, iamges));
    }

    @Override
    protected void onResume() {
        super.onResume();

        // extract names of samples from res/arrays
        final String[] values = BadgesVault.getBadges();
        final Integer[] iamges = BadgesVault.getImages();

        // use default list-ArrayAdapter */
        this.setListAdapter(new CustomListAdapter(this, values, iamges));
    }
}
