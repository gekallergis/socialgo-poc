package com.wikitude.samples;

import android.app.ListActivity;
import android.os.Bundle;

import com.wikitude.sdksamples.R;

public class BadgesActivity extends ListActivity {
    Integer[] imgid={
            R.drawable.micro,
            R.drawable.drums,
            R.drawable.guitar

    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.badges);

        // extract names of samples from res/arrays
        final String[] values = {"Badge 1", "Badge 2", "Badge 3"};

        // use default list-ArrayAdapter */
        this.setListAdapter(new CustomListAdapter(this, values, imgid));
    }
}
